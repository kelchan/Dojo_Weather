function city( element ) {
    console.log( 'working', element );
    let cityClicked = element.innerText;
    alert( 'Loading ' + cityClicked + ' weather report' );
}

function remove( element ) {
    console.log( 'remove meeeee', element )
    document.querySelector( element ).remove();
}

function temp( element ) {
    console.log( 'working', element.value, document.querySelector( '#change' ).innerText )
    let selected = element.value;
    let change = parseInt( document.querySelector( '#change' ).innerText );
    if( selected == 'F' ) {
        change = ( change * 9 / 5 ) + 32;
        document.querySelector( '#change' ).innerHTML = Math.round(change);
    }
    if( selected == 'C' ) {
        change = ( change - 32 ) * 5 / 9;
        document.querySelector( '#change' ).innerText = Math.round(change);
    }
}