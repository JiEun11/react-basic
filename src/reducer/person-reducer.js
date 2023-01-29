export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      /* 이거의 축약 버전
        const prev = action.prev;
        const current = action.current; 
      */
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case "deleted": {
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== action.name),
      };
    }
    default: {
      // 우리가 정의 하지 않은 타입일 때 에러 던지기
      throw Error(`알 수 없는 액션 타입입니다: ${action.type}`);
    }
  }
}
