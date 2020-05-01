<?php
					
	include 'db_info.php';
        
    $myquery = "SELECT c.rank, c.city,m.country_code, m.country_iso, l.lat, l.lng, a.rk as arrivals_rank, r.rk as receipts_rank, s_poi.*, c.country, c.station, ci.*

		FROM `cities` c
		join cities_sygic_mapping m on c.rank = m.city_id 
		join `city_indexes` ci on c.rank = ci.city_id
		join sygic_city_location l on m.sygic_id = l.cityid  
		join `arrivals_processed` a on c.rank = a.id 
		join `receipts_processed` r on c.rank = r.id 
		join 
		(select 
			cityid,
				ROUND(sum(IFNULL(discovering,0))+ SUM(IFNULL(discovering,0)* rating),1) as discovering,
            	ROUND(sum(IFNULL(doing_sports,0))+ SUM(IFNULL(doing_sports,0)* rating),1) as sports,
            	ROUND(sum(IFNULL(eating,0))+ SUM(IFNULL(eating,0)* rating),1) as eating,
            	ROUND(sum(IFNULL(going_out,0))+ SUM(IFNULL(going_out,0)* rating),1) as nightlife,
            	ROUND(sum(IFNULL(hiking,0))+ SUM(IFNULL(hiking,0)* rating),1) as hiking,
            	ROUND(sum(IFNULL(relaxing,0))+ SUM(IFNULL(relaxing,0)* rating),1) as relaxing,
            	ROUND(sum(IFNULL(shopping,0))+ SUM(IFNULL(shopping,0)* rating),1) as shopping,
            	ROUND(sum(IFNULL(sightseeing,0))+ SUM(IFNULL(sightseeing,0)* rating),1) as sightseeing,
            	ROUND(sum(IFNULL(playing,0))+ SUM(IFNULL(playing,0)* rating),2) as family
		from `sygic_poi`
		group by cityid) s_poi on s_poi.cityid = m.sygic_id
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