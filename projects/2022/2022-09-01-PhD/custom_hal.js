
  // Function to insert iframe
  function insertIframe(theme) {
    const iframeContainer = document.getElementById("iframe-container");
    var bodyClass = window.document.body.classList;
    iframeContainer.innerHTML = ''; // Clear previous iframe
  
    let iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "500";
    iframe.frameborder="0";
  
    iframe.scrolling="auto";
  
  
    if (bodyClass.contains('quarto-light')) {
      iframe.src = "https://haltools.archives-ouvertes.fr/Public/afficheRequetePubli.php?auteur_exp=Lavigne&idHal=thomas-lavigne&CB_auteur=oui&CB_titre=oui&CB_article=oui&CB_DOI=oui&langue=Anglais&tri_exp=annee_publi&tri_exp2=typdoc&tri_exp3=date_publi&ordre_aff=TA&CB_rubriqueDiv=oui&Fen=Aff&css=https://th0maslavigne.github.io/thomaslavigne.github.io/Hal_css.css";
    } else {
      iframe.src = "https://haltools.archives-ouvertes.fr/Public/afficheRequetePubli.php?auteur_exp=Lavigne&idHal=thomas-lavigne&CB_auteur=oui&CB_titre=oui&CB_article=oui&CB_DOI=oui&langue=Anglais&tri_exp=annee_publi&tri_exp2=typdoc&tri_exp3=date_publi&ordre_aff=TA&CB_rubriqueDiv=oui&Fen=Aff&css=https://th0maslavigne.github.io/thomaslavigne.github.io/Hal_css_dark.css";
      // iframe.style="background: #222;";
      // iframe.allowtransparency="true";
    }
  
    iframeContainer.appendChild(iframe);
  }
  
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        insertIframe();
      }
    });
  });
  
  observer.observe(window.document.body, {
    attributes: true
  });
  
  insertIframe();
  
  
  