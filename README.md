# Calculator

> Create a calculator app without using any third-party libraries. The calculator should be capable of performing addition, subtraction, multiplication, division and exponentiation. It should be usable via mouse and keyboard. Before you start, choose three aspects that you intend to focus on (e.g. design, maintainability, etc.) and briefly explain why you chose each.

I chose to focus on the following aspects:

**Abstraction:** The calculator logic should be decoupled from the HTML interface so it can be easily used with mouse/touch/keyboard inputs or even as a standalone object via JavaScript.

**Responsive Design:** The calculator should work on desktop browsers, but also mobile device like phones and tablets. The UI should adjust to the device being used. The app should feel native when added to the home screen.

**Avoid `eval`:** JavaScript's `eval` is generally considered bad practice and will be avoided in the calculator logic. Additionally, evaluating math expressions manually will be a more interesting challenge.
