function NotFoundScreen(): JSX.Element {
  return (
    <section
      style = {{
        display: 'grid',
        gridTemplateColumns: '60% 40%',
        height: '100vh',
        fontFamily: 'rubik, arial, sans-serif',
        color: '#383838',
      }}
    >
      <div
        style = {{
          maxWidth: '1240px',
          padding: '0 10px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <h1
          style = {{
            fontSize: '48px',
            fontStyle: 'oblique',
          }}
        >
          It`s just 404 Error!
        </h1>
        <p
          style={{
            display: 'block',
            fontSize: '24px',
          }}
        >The Page you are looking for doesn`t exist or an other error occurred.
        </p>
        <p
          style={{
            display: 'block',
            fontSize: '24px',
          }}
        >
          <a href="/" style={{
            textDecoration: 'underline',
          }}
          >
          Go back,
          </a>
          to choose a new direction
        </p>
      </div>
      <div
        style={{
          background: 'url(../img/404_error.jpg)',
          backgroundPositionX: '35%',
          backgroundPositionY: 'center',
          borderRadius: '10px',
          transform: 'translateX(10px) rotate(10deg) translateY(5px)',
          border: '5px solid #4481c3',
        }}
      >
      </div>
    </section>
  );
}

export default NotFoundScreen;
