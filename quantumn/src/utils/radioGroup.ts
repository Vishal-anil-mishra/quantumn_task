class RadioGroup {
    selectedIndex: number;
    radioButtons: HTMLElement[];
    private radioGroup: HTMLElement;
    private firstRadioButton: HTMLElement;
    private lastRadioButton: HTMLElement;

    constructor(radioGroup: HTMLElement) {
        this.radioGroup = radioGroup;
        this.radioButtons = [];
        this.selectedIndex = 0;

        const radioButtons = this.radioGroup.querySelectorAll("[role=radio]");

        this.firstRadioButton = radioButtons[0] as HTMLElement;
        this.lastRadioButton = radioButtons[0] as HTMLElement;

        radioButtons.forEach((radioButton) => {
            const _radioButton = radioButton as HTMLElement;

            _radioButton.setAttribute("tabindex", "-1");
            _radioButton.setAttribute("aria-checked", "false");

            _radioButton.addEventListener(
                "keydown",
                this.handleKeyDown.bind(this)
            );
            _radioButton.addEventListener("click", this.handleClick.bind(this));

            this.radioButtons.push(_radioButton);

            if (!this.firstRadioButton) this.firstRadioButton = _radioButton;
            this.lastRadioButton = _radioButton;
        });

        this.firstRadioButton.setAttribute("tabindex", "0");
        this.firstRadioButton.setAttribute('aria-checked', "true");
    }

    private setChecked(currentRadioButtonTarget: HTMLElement): void {
        const currentRadioButton = currentRadioButtonTarget;
        this.radioButtons.forEach((radioButton) => {
            radioButton.setAttribute("aria-checked", "false");
            radioButton.setAttribute("tabindex", "-1");
            const radioButtonImage = radioButton
                .children[0] as HTMLImageElement;
            radioButtonImage.src = "assets/icons/radio-button-off.svg";
        });
        this.selectedIndex = this.radioButtons.indexOf(currentRadioButton);
        const currentRadioButtonImage = currentRadioButton
        .children[0] as HTMLImageElement;
        currentRadioButtonImage.src = "assets/icons/radio-button-on.svg";
        currentRadioButton.setAttribute("aria-checked", "true");
        currentRadioButton.setAttribute("tabindex", "0");
        currentRadioButton.focus();
    }

    private setCheckedPrevious(currentRadioButton: HTMLElement): void {
        if (currentRadioButton === this.firstRadioButton)
            this.setChecked(this.lastRadioButton);
        else {
            const index = this.radioButtons.indexOf(currentRadioButton);
            this.setChecked(this.radioButtons[index - 1]);
        }
    }

    private setCheckedNext(currentRadioButton: HTMLElement): void {
        if (currentRadioButton === this.lastRadioButton)
            this.setChecked(this.firstRadioButton);
        else {
            const index = this.radioButtons.indexOf(currentRadioButton);
            this.setChecked(this.radioButtons[index + 1]);
        }
    }

    private handleKeyDown(event: KeyboardEvent): void {
        const target = event.target as HTMLElement;
        if(target === null) 
            return;
        const currentRadioButton = target.children.length
            ? target
            : target.parentElement;
        let flag = false;

        const radioButton = currentRadioButton as HTMLElement;

        switch (event.key) {
            case " ":
            case "Enter":
                this.setChecked(radioButton);
                flag = true;
                break;
            case "Up":
            case "ArrowUp":
            case "Left":
            case "ArrowLeft":
                this.setCheckedPrevious(radioButton);
                flag = true;
                break;
            case "Down":
            case "ArrowDown":
            case "Right":
            case "ArrowRight":
                this.setCheckedNext(radioButton);
                flag = true;
                break;
            default:
                break;
        }

        if (flag) {
            event.stopPropagation();
            event.preventDefault();
        }
    }

    private handleClick(event: MouseEvent): void {
        this.setChecked(event.currentTarget as HTMLElement);
    }
}

export default RadioGroup;
