let id = 3;
let initialState = [
  {
    id: 1,
    title: "Wake up marking at 5 am",
    status: false,
    date: new Date().toLocaleTimeString(),
  },
  {
    id: 2,
    title: "Do warm up for mind",
    status: false,
    date: new Date().toLocaleTimeString(),
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case "add_todo":
      return [
        ...state,
        {
          id,
          title: action.payload.title,
          status: false,
          date: new Date().toLocaleTimeString(),
        },
      ];

    case "update_todo":
      let [selectedList] = [...state.filter((todo) => todo.id === action.payload.id)];
      return [
        ...state.filter((todo) => todo.id !== action.payload.id),
        {
          ...selectedList,
          title: action.payload.title,
          date: new Date().toLocaleTimeString(),
        },
      ];

    case "delete_todo":
      return [...state.filter((todo) => todo.id !== action.payload.id)];

    default:
      return state;
  }
}
