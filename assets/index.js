
$(function () {
    var saveBtn = $(".saveBtn");
    var tasks = JSON.parse(localStorage.getItem("tasks")) || {};
    var today = dayjs();
    var currentDay = $("#currentDay");
    var currentHour = parseInt(today.format("H"));
    
    // Event listener for click on saveBtn
    saveBtn.on("click", storeTasks);
    
    for (const key in tasks) {
      var timeBlock = $("#" + key).children()[1];
      timeBlock.value = tasks[key];
    }
    // Create function to store tasks
    function storeTasks(event) {
      var storeTask = {
        task: $(this).siblings()[1].value,
        time: $(this).parent().attr("id"),
      };
  
      tasks[storeTask.time] = storeTask.task;
      // Set items in local storage
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    currentDay.text(today.format("dddd D, MMMM ,YYYY h:mm:ss A"));
  
    for (var i = 9; i < 18; i++) {
      var relativeTime = $("#hour-" + i);
      if (i < currentHour) {
        relativeTime.addClass("past");
      } else if (i === currentHour) {
        relativeTime.addClass("present");
      } else {
        relativeTime.addClass("future");
      }
    }
    
  });
