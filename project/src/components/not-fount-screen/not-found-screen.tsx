function NotFoundScreen(): JSX.Element {
  return (
    <section className="not-found-screen container">
      <div className="not-found-screen__content">
        <h1>It`s just 404 Error!</h1>
        <p>The Page you are looking for doesn`t exist or an other error occurred.</p>
        <div>
          <p><a href="/">Go back,</a>to choose a new direction</p>
        </div>
      </div>
    </section>
  );
}

export default NotFoundScreen;
