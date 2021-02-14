{
    /**
     * Enum
     */

    //JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY":0,"TUESDAY":1,"WEDNESDAY":2})
    const dayOfToday = DAYS_ENUM.MONDAY;

    //TypeScript
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    enum Days {
        Monday = 1, //0
        Tuesday,    //1
        Wednesday,  //2
        Thursday,   //3
        Friday, //4
        Saterday,   //5
        Sunday  //6
    }
    console.log(Days.Tuesday);
    let day:Days = Days.Saterday;
    day = Days.Tuesday
    console.log('day',day);

    let dayOfweek: DaysOfWeek = 'Monday';
    dayOfweek = 'Tuesday';
}