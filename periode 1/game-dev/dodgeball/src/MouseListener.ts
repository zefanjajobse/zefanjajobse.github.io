class MouseListener {
    public mouseLocation: number;

    // listen to mouse events and change this.location based on event (only X cordinate)
    constructor() {
        document.addEventListener('mousemove', (event) => {
            this.mouseLocation = event.clientX
        });
    }
}