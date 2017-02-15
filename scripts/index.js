$(window).scroll(function() {

});
angular.module("parallax", []);
angular.module("parallax")
  .controller("mainctrl", function($scope) {
    $scope.showus = false;
    $scope.showbanner = false;
    $scope.makeshowbanner = function() {
      document.getElementById('our-story').scrollIntoView();
      $scope.showbanner = true;
      console.log("true");
    };
    $scope.messages = [
      ["Oye Guba!! I have something for us!!"],
      ["St. Venkys"],
      ["Topper Nikitha", "Silent Nikitha", "Strict Nikitha"],
      ["Am not going to look up :p"],
      ["0123.... en bekadru thago anthe!! gube"],
      ["Many years passed"],
      ["Hey Rahul, lets plan for get together?",
        "Yeah, we have to get together",
        "Ayyo hogo yaru baralla... :(",
        "Perfect floap get together leader :p"
      ],
      [
        "Hey! Aytha pa tech seminar. Adan kelakke maadde. Disturb madod yake antha :p",
        "Hmmm yeah almost done :)",
        "Treat Yavaga Madam :p", "Okay lets meeeet =D",
        "Seminar madkodu, treat thago :p"
      ],
      ["Do you remeber tri-chocolates :p"],
      ["Okay, lets order. I am okay with you eating non-veg also.",
        "Okay, Nange ondu fish fry", "Okay done(Almost you went to order)",
        "Madam, I am a vegetarian. I had lied you before :p =D",
        "First treat at KFC before you gave me many of those :)"
      ],
      [
        "Amele aagid ella mele heluthe nodu :p :)"
      ]
    ];
  })
  .directive("scroll", function($window, $timeout) {
    return function(scope, element, attrs) {
      angular.element($window).bind("scroll", function() {
        var pos = $(this).scrollTop();
        var pos1 = $(this).scrollLeft();
        console.log($('#end').scrollTop());
        console.log($('#end').position().left);
        console.log($('#start').position().left);
        console.log($('#front-page').width());
        var frontpagewidth = $(window).width();
        var lastpos = $('#end').position().left;
        var firstpos = $('#start').position().left;
        // console.log("total:");
        // console.log(pos1 + frontpagewidth);
        // console.log(lastpos);
        //
        // console.log(pos1);
        if (pos1 + frontpagewidth > lastpos) {
          $("#me").addClass("move-forward");
          $("#her").addClass("move-backward");
          $timeout(function() {
            console.log(scope.showus);
            scope.showus = true;
          }, 3000);
        }

        scope.$apply();
      });
    };
  });
