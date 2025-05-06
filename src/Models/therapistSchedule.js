export class TherapistShedule {
    constructor(id, name, speciality, clientDayDates, sessionType) {
        this.id = id;
        this.name = name;
        this.speciality = speciality;
        this.clientDayDates = clientDayDates;
        this.sessionType = sessionType;
      }
    
}

export class ClientDayDates {
    constructor(from, to, day, date, method) {
        this.from = from;
        this.to = to;
        this.day = day;
        this.date = date;
        this.method = method;
    }
}