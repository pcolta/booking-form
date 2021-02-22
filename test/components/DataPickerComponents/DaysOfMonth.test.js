import {mount} from 'vue-test-utils'
import DaysOfMonth from "@/components/DatePicker/DaysOfMonth";
import moment from "moment";

describe('DaysOfMonth.test.js', () => {

    let lastMonthDay = "2021-01-31"
    let today = "2021-02-19"
    let unavailable = "2021-02-20"
    let checkedIn = "2021-02-21"
    let checkedOut = "2021-02-23"
    let dayToSelect = "2021-02-24"
    let allDays = [
        {date: lastMonthDay, isCurrentMonth: false},
        {date: today, isCurrentMonth: true},
        {date: unavailable, isCurrentMonth: true},
        {date: checkedIn, isCurrentMonth: true},
        {date: "2021-02-22", isCurrentMonth: true},
        {date: checkedOut, isCurrentMonth: true},
        {date: dayToSelect, isCurrentMonth: true}
    ]

    let wrapper = mount(DaysOfMonth, {
        propsData: {
            datesOfDaysMonth: allDays,
            dateCheckIn: checkedIn,
            dateCheckOut: checkedOut,
            today: today,
            unavailableDates: [unavailable]
        }
    })

    it('has the expected number of month days', () => {
        expect(wrapper.findAll("li").length).toBe(allDays.length)
    })

    it('has expected days checked', () => {
        let checkedElements = wrapper.findAll(".isChecked")
        expect(checkedElements.length).toBe(3)
    })

    it('has expected day of checkedIn', () => {
        let checkedInElement = wrapper.findAll(".checkIn")
        expect(checkedInElement.length).toBe(1)
    })

    it('has expected day of checkedOut', () => {
        let checkedOutElement = wrapper.findAll(".checkOut")
        expect(checkedOutElement.length).toBe(1)
    })

    it('has expected unavailable day to be disabled', () => {
        let checkedOutElement = wrapper.find(".disabled")
        expect(checkedOutElement.text()).toBe(moment(unavailable).format("D"))
    })

    it('has expected last month day to not have class', () => {
        let checkedOutElement = wrapper.find("li[class=\"\"]")
        expect(checkedOutElement.text()).toBe(moment(lastMonthDay,"YYYY-MM-DF").format("D"))
    })

    it('has expected selected day', () => {
        wrapper.vm.$emit('selectDay', dayToSelect)
        expect(wrapper.emitted().selectDay).toStrictEqual([["2021-02-24"]])
    })
})
