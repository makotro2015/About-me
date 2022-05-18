import user1 from "./../image/user1.png";
import user2 from "./../image/user2.png";
import user3 from "./../image/user3.png";
import user4 from "./../image/user4.png";
import avatar from "./../image/author.JPG";
import success from "./../image/success.png";
import fail from "./../image/fail.png";
import bgSuccess from "./../image/greenBubbles.png";
import bgFail from "./../image/redBubbles.png";

const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_COMMENT = "ADD-COMMENT";
const UPDATE_NEW_COMMENT_TEXT = "UPDATE-NEW-COMMENT-TEXT";
const UPDATE_NEW_COMMENT_NAME = "UPDATE-NEW-COMMENT-NAME";

let store = {
  _state: {
    authorInfo: {
      avatar: { avatar },
      fullName: "Алена Комарова",
      birthday: "12.06.1994",
      town: "Томск",
      gender: "женщина",
      age: "27",
      aboutSelf:
        'Привет! Меня зовут Алена, и я очень хочу стать крутым фронтенд-разработчиком :) На данный момент изучила HTML, CSS, JS, знаю основы TypeScript, React, Redux, запросы на сервер и обработу ответов. На данный момент углубляюсь в React. Очень хочу и дальше развиваться и расти в этом направлении :)',
      ps: "Присылайте тестовое задание и зовите на собес :)",
      pet: "есть",
    },

    newCommentText: "",
    newCommentName: "",

    commentsData: [
      {
        url: { user1 },
        name: "Буба Бубенцов",
        date: "08.01.2022",
        comment:
          "Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.",
      },
      {
        url: { user2 },
        name: "Илья Анташкевич",
        date: "08.01.2022",
        comment:
          "Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.",
      },
      {
        url: { user3 },
        name: "Юрина Маргарита",
        date: "26.12.2021",
        comment:
          "Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.",
      },
      {
        url: { user4 },
        name: "Дмитрий Иванов",
        date: "16.12.2021",
        comment:
          "Отвечала за найм и адаптацию сотрудников в компании, за поддержание на нужном уровне HR-бренда и трудового настроя коллектива. В компанию пришла без опыта работы HR-ом. Всему научилась здесь. Как теории, так и практике. Набрала опыт достаточно быстро. Есть программа обучения, поощряются различные курсы, и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.",
      },
    ],

    currentMessage: {
      src: "",
      title: "",
      text: "",
      alt: "",
    },
    messageSuccess: {
      src: { success },
      title: "Успешно!",
      text: "Спасибо за отзыв о нашей компании :)",
      alt: "Успешно",
      style: {
        background: "#b5ffa2",
        backgroundImage: `url(${bgSuccess})`,
      },
    },
    messageFail: {
      src: { fail },
      title: "Что-то не так...",
      text: "Не получилось отправить отзыв. Попробуйте еще раз!",
      alt: "Ошибка",
      style: {
        background: "#F64B3C",
        color: "white",
        backgroundImage: `url(${bgFail})`,
      },
    },
  },

  getState() {
    return this._state;
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_MESSAGE) {
      this._state.currentMessage =
        this._state.newCommentText && this._state.newCommentName
          ? this._state.messageSuccess
          : this._state.messageFail;
    } else if (action.type === ADD_COMMENT) {
      if (this._state.newCommentText && this._state.newCommentName) {
        const newComment = {
          url: { user2 },
          name: this._state.newCommentName,
          date: "16.12.2021",
          comment: this._state.newCommentText,
        };
        this._state.commentsData.push(newComment);
        this._state.newCommentText = "";
        this._state.newCommentName = "";
      }
      this._callSubscriber(store);
    } else if (action.type === UPDATE_NEW_COMMENT_TEXT) {
      this._state.newCommentText = action.newText;
      this._callSubscriber(store);
    } else if (action.type === UPDATE_NEW_COMMENT_NAME) {
      this._state.newCommentName = action.newText;
      this._callSubscriber(store);
    } else {
      console.warn("Нет такого метода, ошибка в названии типа!");
    }
  },
};

export const updateNewCommentTextActionCreator = (text) => ({
  type: "UPDATE-NEW-COMMENT-TEXT",
  newText: text,
});
export const updateNewCommentNameActionCreator = (text) => ({
  type: "UPDATE-NEW-COMMENT-NAME",
  newText: text,
});
export const addMessageActionCreator = () => ({ type: "ADD-MESSAGE" });
export const addCommentActionCreator = () => ({ type: "ADD-COMMENT" });

export default store;

window.store = store;
