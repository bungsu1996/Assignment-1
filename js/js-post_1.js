$(document).ready(function () {
    $("#form-comment").on("submit", function (event) {
      event.preventDefault();
  
      let nameKomentator = $("input#name").val();
      let textKomentator = $("input#comment").val();
  
      $(".wrapper-list-comment").append(`
        <div class="list-comment">
          <div id="comment-name">${nameKomentator}</div>
          <div id="comment-text">${textKomentator}</div>
        </div>
      `);
    });
  });
  