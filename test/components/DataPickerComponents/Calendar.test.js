import {mount} from 'vue-test-utils'
import CalendarComponent from "@/components/DatePicker/Calendar";


describe('Calendar.test.js', () => {
    let unavailable = "2021-02-20"
    let checkedIn = "2021-02-21"
    let checkedOut = "2021-02-23"
    let today = "2021-02-19"

    const wrapper = mount(CalendarComponent, {
        propsData: {
            dateCheckIn: checkedIn,
            dateCheckOut: checkedOut,
            unavailableDates: unavailable,
        }
    })

    wrapper.setMethods({today: () => today})

    it('has the expected number of month days', () => {
        expect(wrapper.findAll("ul[class=\"days-of-month\"] > li").length).toBe(35)
    })

    it('has the expected number of days of week names in header', () => {
        expect(wrapper.findAll("ul[class=\"days-of-week\"] > li").length).toBe(7)
    })
})