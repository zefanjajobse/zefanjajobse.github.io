/**
 * The ClockDisplay class implements a digital clock display for a
 * European-style 24 hour clock. The clock shows hours and minutes. The 
 * range of the clock is 00:00 (midnight) to 23:59 (one minute before 
 * midnight).
 * 
 * The clock display receives "ticks" (via the timeTick method) every minute
 * and reacts by incrementing the display. This is done in the usual clock
 * fashion: the hour increments when the minutes roll over to zero.
 * 
 * @author Michael Kölling and David J. Barnes and BugSlayer
 */
class ClockDisplay {

    private hours : number;
    private minutes : number;
    private seconds : number;

    private output: HTMLElement;

    /**
     * Construct clockdisplay
     * 
     * @param output 
     * @param ticker 
     */
    public constructor(output: HTMLElement) {
        this.output = output;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.updateDisplay();
    }
    
    /**
     * This method should get called once every minute - it makes
     * the clock display go one minute forward.
     */
    public timeTick() {
        this.seconds = (this.seconds + 1) % 60;
        if(this.seconds == 0) {
            this.minutes = (this.minutes + 1) % 60;
            if(this.minutes == 0) {
                this.hours = (this.hours + 1) % 24;
            }
        }
        this.updateDisplay();
    }

    /**
     * Set the time of the display to the specified hour and
     * minute.
     * 
     * @param hours the Hours value as a `string`
     * @param minutes the Minutes value as a `string`
     * @param seconds optional the Seconds value as a `string`
     */
    public setTime(hours: string, minutes: string, seconds?: string) {
        // Try to update the hours value
        this.hours = Number(hours);
        // Try to update the minutes value
        this.minutes = Number(minutes);
        if (seconds) {
            // Try to update the seconds value if this value is given
            this.seconds = Number(seconds);
        }

        // Update the display
        this.updateDisplay();
    }

    /**
     * Update the display element in the DOM.
     */
    private updateDisplay() {
        let displayString = "";
        
        if (this.hours<10) {
            displayString += "0";
        }
        displayString += this.hours + ":";

        if (this.minutes<10) {
            displayString += "0";
        }
        displayString += this.minutes + ":";

        if (this.seconds<10) {
            displayString += "0";
        }
        displayString += this.seconds + ":";
        this.output.innerText = displayString;
    }

}
