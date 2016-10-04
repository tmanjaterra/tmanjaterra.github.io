angular.module('myCv',[]);

angular.module('myCv').controller('cvCtrl',
  function($scope){
    $scope.imagens = [
      
  {  src: 'Gmail-icon.png',
    url: 'mailto:thalles.manjaterra@gmail.com'
  },

  {  src: 'linkedin-icon.png',
    url: 'https://br.linkedin.com/in/thallesmanjaterra'
  },

  {  src: 'github-icon.png',
    url: 'https://github.com/thallesManjaterra'
  },
];
  });
