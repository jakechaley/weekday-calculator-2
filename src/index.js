import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { stringDayOfTheWeek } from "./weekday";

$(document).ready(function() {
  $('#userInput').submit(function(event) {
    event.preventDefault();
    const myDayString = $('#dateInput').val();
    console.log(myDayString)
    const myDay = new Date(myDayString);
    console.log(myDay);
    $('.results').show();
    const weekday = stringDayOfTheWeek(myDay);
    $('#weekday').text(weekday);
  });
});