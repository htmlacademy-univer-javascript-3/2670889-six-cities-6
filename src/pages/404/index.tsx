import style from './index.module.css';

const NotFound = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="page page--gray page--favorites-empty">
      <div className="page__main page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className={style.notFound}>
            <div className={style.notFoundStatusWrapper}>
              <b className={style.notFoundStatus}>404</b>
              <p className={style.notFoundStatusDescription}>
                Страница не найдена
              </p>
              <div className={style.notFoundButtons}>
                <button
                  className={`${style.notFoundButton} form__submit`}
                  onClick={handleGoHome}
                >
                  На главную
                </button>
                <button
                  className={`${style.notFoundButton} form__submit ${style.notFoundButtonSecondary}`}
                  onClick={handleGoBack}
                >
                  Назад
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
