// Associe une action au fait de cliquer sur le bouton
$('.btn').on( 'click', function(event) {
  $(event.target).next().toggleClass('show');
});
