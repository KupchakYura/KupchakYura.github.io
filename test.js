var timer;
var curr_robot_td;
var max_try = 99;
var robot_pos = [];
var last_direction = 'down';
var new_td = undefined;
var then_the_wall = false;
var max_r = -1;
var max_c = -1;

function init() {


    function td_removeClass(self) {
        if ((self.attr('class') === undefined)
            || (self.attr('class') === 'dis')) {
            self.removeClass('dis').addClass('enl');
        } else {
            self.removeClass('enl').addClass('dis');
        }
    }

    function move_robot() {
        curr_robot_td.removeClass('robot');
        // curr_robot_td.addClass('path');
        new_td.addClass('robot');
        robot_pos = new_td.attr('id').split('-');
        curr_robot_td = new_td;
    }


    function next_step() {
        console.log(last_direction);
        switch (last_direction) {

            case 'down':
                new_td = $('#' + (parseInt(robot_pos[0]) + 1) + '-' + robot_pos[1]);
                console.log('#' + (parseInt(robot_pos[0]) + 1) + '-' + robot_pos[1]);
                if (new_td.attr('class') === 'enl') {
                    move_robot();
                    // curr_robot_td.removeClass('robot');
                    // new_td.addClass('robot');
                    // robot_pos = new_td.attr('id').split('-');
                    // curr_robot_td = new_td;
                    if (!then_the_wall) {
                        last_direction = 'down';
                    } else {
                        last_direction = 'right';
                    }

                } else {
                    last_direction = 'left';
                    if (!then_the_wall) {
                        then_the_wall = true;
                    }
                    next_step();
                }
                break;
            case 'left':
                new_td = $('#' + robot_pos[0] + '-' + (parseInt(robot_pos[1]) - 1));
                if (new_td.attr('class') === 'enl') {
                    move_robot();
                    // curr_robot_td.removeClass('robot');
                    // new_td.addClass('robot');
                    // robot_pos = new_td.attr('id').split('-');
                    // curr_robot_td = new_td;
                    last_direction = 'down';
                } else {
                    last_direction = 'top';
                    next_step();
                }
                break;
            case 'top':
                new_td = $('#' + (parseInt(robot_pos[0]) - 1) + '-' + robot_pos[1]);
                if (new_td.attr('class') === 'enl') {
                    move_robot();
                    // curr_robot_td.removeClass('robot');
                    // new_td.addClass('robot');
                    // robot_pos = new_td.attr('id').split('-');
                    // curr_robot_td = new_td;
                    last_direction = 'left';
                } else {
                    last_direction = 'right';
                    next_step();
                }
                break;
            case 'right':
                new_td = $('#' + robot_pos[0] + '-' + (parseInt(robot_pos[1]) + 1));
                if (new_td.attr('class') === 'enl') {
                    move_robot();
                    // curr_robot_td.removeClass('robot');
                    // new_td.addClass('robot');
                    // robot_pos = new_td.attr('id').split('-');
                    // curr_robot_td = new_td;
                    last_direction = 'top';
                } else {
                    last_direction = 'down';
                    next_step();
                }
                break;
            default:
        }

    }


    $('td')
        .mouseover(function (e) {
                if ((e.ctrlKey) && (e.which === 1)) {
                    td_removeClass($(this));
                }
            }
        )
        .mousedown(function (e) {
                if (e.ctrlKey) {
                    td_removeClass($(this));
                } else {
                    if ($(this).attr('class') === 'enl') {
                        curr_robot_td = document.getElementsByClassName('robot')[0];
                        if (curr_robot_td !== undefined) {
                            curr_robot_td.setAttribute('class', 'enl');
                        }
                        $(this).addClass('robot');
                        curr_robot_td = $(this);
                    }
                }

            }
        );


    $('#next_step')
        .click(function (e) {
            var table = $('#test_table');
            max_r = table.find('tr').length;
            max_c = table.find('tr').eq(0).find('td').length;
            robot_pos = curr_robot_td.attr('id').split('-');
            // last_direction = 'down';
            // then_the_wall = false;
            next_step();
        });


    $('#start')
        .click(function (e) {
                if (curr_robot_td !== undefined) {
                    var table = $('#test_table');
                    max_r = table.find('tr').length;
                    max_c = table.find('tr').eq(0).find('td').length;
                    robot_pos = curr_robot_td.attr('id').split('-');
                    last_direction = 'down';
                    then_the_wall = false;
                    var i = 0;

                    timer = setInterval(function () {
                        i++;


                        if (
                            ((robot_pos[0] > 1) && (robot_pos[0] < max_r)) &&
                            ((robot_pos[1] > 1) && (robot_pos[1] < max_c)) &&
                            (i < max_try)
                        ) {
                            next_step();
                            console.log('next-' + i);
                        } else {
                            clearInterval(timer);
                            console.log('stop');
                        }
                    }, 150);


                } else {
                    alert('Робот не знайдений!');
                }

            }
        );
}