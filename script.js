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
    console.log( 'working', element.value, document.querySelectorAll( '#change' )[0].innerText )
    let selected = element.value;
    // let num = parseInt( document.querySelector( '#change' ).innerText );
    for( let i = 0; i < document.querySelectorAll( '#change' ).length; i++ ) {
        let num = parseInt( document.querySelectorAll( '#change' )[i].innerText );
        if( selected == 'F' ) {
            num = ( num * 9 / 5 ) + 32;
            document.querySelectorAll( '#change' )[i].innerText = Math.round( num );
        }
        if( selected == 'C' ) {
            num = ( num - 32 ) * 5 / 9;
            document.querySelectorAll( '#change' )[i].innerText = Math.round( num );
        }
    }
}