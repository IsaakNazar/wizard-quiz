export interface IQuiz {
  id: number
  sectionTitle: string
  code: string
  group: IQuizForm[]
}

export interface IQuizForm {
  quizTitle: string
  quiz: IQuizQA[]
}

export interface IQuizQA {
  question: string
  answer: string
}
