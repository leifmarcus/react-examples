
function removeProtocol( url )
{
    return url.replace( /https*:\/\//, '' );
}

function ReadMore( props )
{
    const title = props.about ? `more about ${props.about}` : 'more about it';

    return (
        <div className="read-more">
            <h2>{ title }</h2>
            <a href={ props.url } target="_blank">{ removeProtocol( props.url ) }</a>
        </div>
    );
}

ReadMore.propTypes = {
    url     : PropTypes.string,
    about   : PropTypes.string,
};
