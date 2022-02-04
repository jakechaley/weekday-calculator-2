import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { stringDayOfTheWeek } from "./weekday";

$(document).ready(function() {
  $('#userInput').submit(function(event) {
    event.preventDefault();
    const myDayString = $('#dateInput').val();
    // const myDay = new Date(myDayString);
    $('.results').show();
    const weekday = stringDayOfTheWeek(myDayString);
    $('#weekday').text(weekday);
  });
});