//Json Object
var data = [
  {
    time: "2022-05-01 23:59:59",
    header: "Sample of header",
    body: [
      {
        tag: "p",
        content: "Lorem ipsum dolor sit amet, nisl lorem.",
      },
    ],
    footer: "Sample of footer",
  },
  {
    time: "2022-04-15 05:21:00",
    header: "Sample of header",
    body: [
      {
        tag: "p",
        content: "Lorem ipsum dolor sit amet, nisl lorem.",
      },
    ],
    footer: "Sample of footer",
  },
  {
    time: "2022-04-14 11:15:02",
    header: "Sample of header",
    body: [
      {
        tag: "p",
        content: "Lorem ipsum dolor sit amet, nisl lorem.",
      },
    ],
    footer: "Sample of footer",
  },
  {
    time: "2022-04-02 03:11:10",
    header: "Sample of header",
    body: [
      {
        tag: "p",
        content: "Lorem ipsum dolor sit amet, nisl lorem.",
      },
    ],
    footer: "Sample of footer",
  },
  {
    time: "2022-03-25 21:54:42",
    header: "Sample of header",
    body: [
      {
        tag: "p",
        content: "Lorem ipsum dolor sit amet, nisl lorem.",
      },
    ],
    footer: "Sample of footer",
  },
  {
    time: "2022-02-06 14:00:00",
    header: "Sample of header",
    body: [
      {
        tag: "p",
        content: "Lorem ipsum dolor sit amet, nisl lorem.",
      },
    ],
    footer: "Sample of footer",
  },
];

$.fn.albeTimeline.languages = {
  "en-US": {
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    shortMonths: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    msgEmptyContent: "No information to display.",
  },
};

//Internationalization
$(function () {
  $("#myTimeline").albeTimeline(data, {
    effect: "none",
    showGroup: false,
    showMenu: false,
    language: "en-US",
    formatDate: "dd MMMM yyyy | HH:mm",
  });

  $(".badge").each(function (index) {
    var date_time = $(this).html().split(" | ");
    var eTime = $("<span>").addClass("time").html(date_time[1]);
    $(this).html(date_time[0]);
    $(this).append("<br>");
    $(this).append(eTime);
  });
});
