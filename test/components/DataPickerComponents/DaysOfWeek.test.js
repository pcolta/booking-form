import { mount } from 'vue-test-utils'
import DaysOfWeek from "@/components/DatePicker/DaysOfWeek";


describe('DaysOfWeek.test.js', () => {
    const wrapper = mount(DaysOfWeek)

    it('has the expected number of weekend days', () => {
        expect(wrapper.findAll("li").length).toBe(7)
    })

    it('has the expected weekend day names', () => {
        let expectedDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        for (let i = 0; i < 7; i++){
            expect(wrapper.findAll("li").at(i).text()).toBe(expectedDays[i])
        }
    })

})
