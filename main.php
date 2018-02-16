<?php
/**
 * Created by PhpStorm.
 * User: Kupchak
 * Date: 15.02.2018
 * Time: 17:12
 */
$row_count = 12;
$cool_count = 12;
$lbrt=array( 
    array(1,1,1,1,0,1,1,1,1,1,1,1),
    array(1,1,1,1,0,1,1,1,1,1,1,1),
    array(1,1,1,1,0,0,0,0,0,0,1,1),
    array(1,0,0,0,1,1,1,1,1,0,1,1),
    array(1,0,0,0,0,0,0,0,0,0,1,1),
    array(1,0,1,1,1,1,1,1,1,1,1,1),
    array(1,0,0,0,0,0,0,0,1,1,1,1),
    array(1,1,1,0,1,0,0,0,0,0,1,1),
    array(0,0,0,1,1,0,0,0,0,0,1,1),
    array(1,1,0,0,0,0,0,0,1,0,1,1),
    array(1,0,0,0,1,1,1,1,1,0,0,1),
    array(1,1,1,1,1,1,1,1,1,1,1,1),
);
$class_arr=array('enl','dis');

print "<div>";
print "<table id='test_table'>";
for ($r = 1; $r <= $row_count; $r++) {
    print "<tr>";
    for ($c = 1; $c <= $row_count; $c++) {
        print "<td class=".$class_arr[$lbrt[$r-1][$c-1]]." id='$r-$c'></td>";
    }
    print "</tr>";
}
print "</table>";
print "<button type=button id=start>Старт!!!</button>";
print "<div class='info'>Для встановленна робота в початкову позицію скористайтесь лівою клавішею мишки.</div>";
print "<div class='info'>Змінити конффігурацію алгоритму можна лівою клавішею мишки при натиснутій клавіші 'Ctrl'.</div>";
print "</div>";
?>
    <script>init_test_table();</script>


