import { defineStore, createPinia, setActivePinia } from "pinia"
const pinia = createPinia()

export default { store: setActivePinia(pinia) }

export const useNewsStore = defineStore('news', {
    state: () => {
        return {
            articles: [],
            categories: [],
            current_ip: null,
            activeArticle: null,
            activeCategory: null,
            LIMIT: 10,
        }
    },
    getters: {
        lastArticles(state) {
            return state.articles.slice(0, state.LIMIT);
        },
        popularCategories(state) {
            return state.categories.slice(0, state.LIMIT);
        },
        activeCategoryArticles(state) {
            if (!state.activeCategory) {
                return [];
            }
            return state.articles.filter((item) => state.activeCategory.articles.indexOf(item.id) >= 0);
        },
        allCategories: (state) => {
            return state.categories;
        },
        allArticles(state){
            return state.articles;
        },
        prevArticle(state) {
            let prevItem = null;
            if (state.activeArticle) {
                state.articles.forEach((item, index) => {
                    if (item.id == state.activeArticle.id) {
                        prevItem = state.articles[index-1] || null;
                    }
                });
            }
            return prevItem;
        },
        nextArticle(state) {
            let nextItem = null;
            if (state.activeArticle) {
                state.articles.forEach((item, index) => {
                    if (item.id == state.activeArticle.id) {
                        nextItem = state.articles[index+1] || null;
                    }
                });
            }
            return nextItem;
        },
    },
    mutations: {
        SET_ARTICLES(state, payload) {
            state.articles = payload.items;
        },
        SET_CATEGORIES(state, payload) {
            state.categories = payload.items;
        },
        SET_ACTIVE_CATEGORY(state, payload) {
            state.activeCategory = payload;
        },
        SET_ACTIVE_ARTICLE(state, payload) {
            state.activeArticle = payload;
        },
    },
    actions: {
        async getCurrentIp(){
            //--Ajax request
            const { ip } = await $fetch('https://api.ipify.org/?format=json', {
                method: 'GET'
            })
            this.current_ip = ip;
        },
        async loadArticles(category_id) {
            let items = {
                "data": [
                    {
                        "binder_id": "1061968",
                        "page_title": "З 26 листопада діятиме Порядок ведення обліку товарних запасів ФОПами",
                        "extrafields": "{\"attributes\":{\"label\":[\"label_important\"],\"paywall_status\":\"3\",\"seo_description\":\"Нагадуэмо, що наказом Мінфіну від 03.09.2021 р. № 496 затверджено Порядок ведення обліку товарних запасів для фізичних осіб – підприємців, у тому числі платників єдиного податку.Цей Порядок визначає правила ведення о\"},\"rubrics\":[\"13\",\"15\",\"17\",\"489\"]}",
                        "uri": "/uk/news/news-1061968.html",
                        "editedon": "0",
                        "date": "16.11.21",
                        "comments": "59",
                        "views": "34039",
                        "label": [
                            "label_important"
                        ],
                        "has_video": false,
                        "in_sidebar": false
                    },
                    {
                        "binder_id": "1061966",
                        "page_title": "Вакциновані українці отримають від держави кошти, – Володимир Еленський",
                        "extrafields": "{\"attributes\":{\"label\":[\"label_important\"],\"source_name\":\"Офіс Президента України\",\"source_link\":\"https:\\/\\/www.president.gov.ua\\/news\\/povnistyu-shepleni-vid-covid-19-ukrayinci-nezabarom-zmozhut-71569\",\"paywall_status\":\"3\",\"seo_description\":\"Президент України Володимир Зеленський повідомив, що держава продовжує наявні програми підтримки бізнесу та громадян, які постраждали від пандемії COVID-19, а також розробляє низку нових інструментів для допомоги. Зокрема, щеплені двом\"},\"rubrics\":[\"13\",\"5\"]}",
                        "uri": "/uk/news/news-1061966.html",
                        "editedon": "0",
                        "date": "16.11.21",
                        "comments": "55",
                        "views": "11720",
                        "label": [
                            "label_important"
                        ],
                        "has_video": false,
                        "in_sidebar": false
                    },
                    {
                        "binder_id": "1061920",
                        "page_title": "ФОП: товарний облік",
                        "extrafields": "{\"attributes\":{\"label\":[\"label_important\"],\"seo_description\":\"Мінфін затвердив Форму обліку товарних запасів для ФОП (наказ від 03.09.2021 р. № 496). Вона запрацює через 10 днів після опублікування (поки що офіційно не опублікована).Це стосується:1) ФОП на загальній системі, які здійснюють ро\",\"has_video\":\"1\",\"video_in_news_link\":\"https:\\/\\/www.youtube.com\\/watch?v=_2X4AvuZONI\",\"paywall_status\":\"3\"},\"rubrics\":[\"4\",\"17\",\"489\",\"517\"]}",
                        "uri": "/uk/news/news-1061920.html",
                        "editedon": "0",
                        "date": "12.11.21",
                        "comments": "51",
                        "views": "26416",
                        "label": [
                            "label_important"
                        ],
                        "has_video": "1",
                        "in_sidebar": false
                    },
                    {
                        "binder_id": "1061821",
                        "page_title": "Для ФОПів затверджено Порядок ведення обліку товарних запасів",
                        "extrafields": "{\"attributes\":{\"label\":[\"label_important\"],\"seo_description\":\"Мінфін наказом від 03.09.2021 р. № 496  затвердив Порядок ведення обліку товарних запасів для фізичних осіб – підприємців, у тому числі платників єдиного податку.Цей Порядок визначає правила ведення обліку товарн\",\"paywall_status\":\"3\"},\"rubrics\":[\"3\",\"4\",\"15\",\"489\"]}",
                        "uri": "/uk/news/news-1061821.html",
                        "editedon": "0",
                        "date": "09.11.21",
                        "comments": "113",
                        "views": "125494",
                        "label": [
                            "label_important"
                        ],
                        "has_video": false,
                        "in_sidebar": false
                    },
                    {
                        "binder_id": "1061818",
                        "page_title": "МОЗ розширило перелік професій, для яких щеплення проти COVID-19 є обов’язковим",
                        "extrafields": "{\"attributes\":{\"label\":[\"label_important\"],\"seo_description\":\"Згідно з наказом, до освітян та працівників центральних та місцевих органів влади, які підлягають обов’язковій вакцинації проти COVID-19 на період дії карантину, встановленого Кабінетом Міністрів України, додаються співробітники:\",\"source_name\":\"МОЗ\",\"source_link\":\"https:\\/\\/moz.gov.ua\\/article\\/news\\/moz-rozshirilo-perelik-profesij-dlja-jakih-scheplennja-proti-covid-19-e-obov%e2%80%99jazkovim\",\"paywall_status\":\"3\"},\"rubrics\":[\"5\",\"9\"]}",
                        "uri": "/uk/news/news-1061818.html",
                        "editedon": "0",
                        "date": "09.11.21",
                        "comments": "73",
                        "views": "22330",
                        "label": [
                            "popular"
                        ],
                        "has_video": false,
                        "in_sidebar": false
                    },
                    {
                        "binder_id": "1061522",
                        "page_title": "Невакцинованих працівників, які підлягають обов'язковій вакцинації, з 8 листопада будуть відсторонювати від роботи",
                        "extrafields": "{\"attributes\":{\"label\":[\"label_important\"],\"seo_description\":\"Уряд затвердив постанову від 20.10.2021 р. № 1096 якою змінив норми постанови № 1236 \\\"Про встановлення карантину та запровадження обмежувальних протиепідемічних заходів з метою запобігання поширенню на тер\",\"paywall_status\":\"3\"},\"rubrics\":[\"5\",\"13\"]}",
                        "uri": "/uk/news/news-1061522.html",
                        "editedon": "0",
                        "date": "26.10.21",
                        "comments": "54",
                        "views": "24257",
                        "label": [
                            "popular"
                        ],
                        "has_video": false,
                        "in_sidebar": false
                    }
                ]
            };
            let data = items.data;

            if(category_id != ''){
                data = data.filter((item) => item.label.includes(category_id));
            }

            let result = data.map((item) => {
                const article = {
                    id: item.binder_id,
                    title: item.page_title,
                    preview: '',
                    content: 'CONTENT news #' + item.binder_id,
                    date: item.date,
                    comments: item.comments,
                    views: item.views,
                };
                return article;
            });

            this.articles = result;
        },
        async loadCategories() {
            this.categories =  [
                {
                    id: 1, title: 'ВСЕ', 'slug': ''
                },
                {
                    id: 2, title: 'ПОПУЛЯРНЕ', slug: 'popular'
                },
                {
                    id: 3, title: 'АНАЛІТИКА', slug: 'label_analytic'
                },
                {
                    id: 4, title: 'ВАЖЛИВО', slug: 'label_important'
                },
            ];
        },
        async loadActiveCategory(context, id) {
            await context.dispatch('loadArticles');
            await context.dispatch('loadCategories');

            let category = context.state.categories.find((item) => {
                return item.id == id;
            });
            context.commit('SET_ACTIVE_CATEGORY', category);
        },
        async loadActiveArticle(id) {
            await this.loadArticles('');

            let model = this.articles.find((item) => {
                return item.id == id;
            });
           this.activeArticle = model;
        },
    },
});