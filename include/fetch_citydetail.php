<?php
    $q = strval($_GET['q']);
	include 'db_info.php';

    $myquery = "SELECT poi.id as poiId,poi.categories as categories
                     ,poi.name as POIName
                     ,poi.cityid as cityId
                     ,poi.name_suffix as cityName
                     ,poi.rating as rating
                     ,poi.rating_local as localRating
                     ,thumbnail_url
                     ,url
                FROM `sygic_poi` poi
                WHERE poi.cityid ='".$q."'limit 15";

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