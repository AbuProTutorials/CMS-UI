export interface QuizGetall {
  $id: string
  $values: Value[]
}

export interface Value {
  $id: string
  id: string
  question: string
  optionsA: string
  optionsB: string
  optionsC: string
  optionsD: string
  correctAnswer: string
  descriptionPhotoPath: string
  lessonId: any
  subjectId: any
  lesson: any
  subject: any
}
