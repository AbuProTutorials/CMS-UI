export interface AddMark {
    $id: string
    $values: Value[]
  }
  
  export interface Value {
    $id: string
    gender: any
    dateOfBirth: DateOfBirth
    coin: number
    parentsPhoneNumber: string
    classId: any
    photoPath: string
    pdfPath: string
    class: any
    location: Location
    firstName: string
    lastName: string
    role: string
    id: string
    userName: string
    normalizedUserName: string
    email: string
    normalizedEmail: string
    emailConfirmed: boolean
    passwordHash: string
    securityStamp: string
    concurrencyStamp: string
    phoneNumber: string
    phoneNumberConfirmed: boolean
    twoFactorEnabled: boolean
    lockoutEnd: any
    lockoutEnabled: boolean
    accessFailedCount: number
  }
  
  export interface DateOfBirth {
    $id: string
    id: string
    day: number
    month: number
    year: number
  }
  
  export interface Location {
    $id: string
    country: string
    region: string
    district: string
    homeNumber: string
  }
  