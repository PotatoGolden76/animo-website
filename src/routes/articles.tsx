import styles from '../styles/articles.module.scss';
import classNames from 'classnames';
import Header from '../components/header';
import Footer from '../components/footer';
import data from '../data/articles.json'

export default function Articles() {
    const containerTStyle = "container";
    let articles: Record<string, any> = {}
    for (let i = 0; i < data.length; i++) {
        if (articles.hasOwnProperty(data[i].month)) {
            articles[data[i].month].push(data[i])
        } else {
            articles[data[i].month] = [data[i]]
        }
    }
    // console.log(articles)


    return (
        <>
            <Header />

            <section className={classNames(containerTStyle, styles.infoContainer)}>
                <h1 className={styles.title}>Articole</h1>
                {
                    Object.keys(articles).map((month, index: number) => {
                        return (
                            <>
                                <h2 key={month}>{month}:</h2>
                                <ul className={styles.imageContainer} key={index}>
                                    {
                                        articles[month].map((article: any, index: number) => {
                                            return (
                                                <li key={index}>
                                                    <a href={article.link}>
                                                        {article.title}
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </>
                        )
                    })
                }
            </section>
            <Footer />
        </>
    );
}

