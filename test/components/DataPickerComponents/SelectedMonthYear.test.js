import {mount} from 'vue-test-utils'
import SelectedMonthYear from "@/components/DatePicker/SelectedMonthYear";


describe('SelectedMonthYear.test.js', () => {
    let monthWithYear = "March 2021"
    let prevMonthSameYear = "February 2021"
    let nextMonthSameYear = "April 2021"

    const wrapper = mount(SelectedMonthYear, {
        propsData: {
            monthWithYear: monthWithYear
        }
    })

    it('has the expected number of days of week names in header', () => {
        expect(wrapper.find("div[class=\"month-year\"]").text()).toBe(monthWithYear)
    })

    it('has the expected previous month emitted', () => {
        wrapper.vm.previousMonth()
        expect(wrapper.emitted().selectMonth[0]).toStrictEqual([prevMonthSameYear])
    })

    it('has the expected next month emitted', () => {
        wrapper.vm.nextMonth()
        expect(wrapper.emitted().selectMonth[1]).toStrictEqual([nextMonthSameYear])
    })
})