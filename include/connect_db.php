<?php
					
    $username = "tutorial_user"; 
    $password = "12341234";   
    $host = "mytestdb.cen3rhkl2zlv.us-east-1.rds.amazonaws.com";
    $database="trip.analyzer";
    
    $connection = mysqli_connect($host, $username, $password, $database);    

    $myquery = "SELECT c.rank, c.city, l.lat, l.lng, a.rk as arrivals_rank, r.rk as receipts_rank
		FROM `cities` c
		join cities_sygic_mapping m on c.rank = m.city_id 
		join sygic_city_location l on m.sygic_id = l.cityid  
		join `arrivals_processed` a on c.rank = a.id 
		join `receipts_processed` r on c.rank = r.id 
		order by c.rank";
    $query = mysqli_query($connection, $myquery);
    
    if (!$query ) {
        echo mysqli_error();
        die;
    }
    	
    $data = array();
    
    for ($x = 0; $x < mysqli_num_rows($query); $x++) {
        $data[] = mysqli_fetch_assoc($query);
    }       
     		 
    mysqli_close($connection);
		
	echo json_encode($data); 	 	
?>