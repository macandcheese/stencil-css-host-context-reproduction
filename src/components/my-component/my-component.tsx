import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrl: "my-component.scss",
  shadow: true
})
export class MyComponent {
  /**
   * The theme
   */
  @Prop({ reflect: true }) theme: "light" | "dark" = "light";

  render() {
    return (
      <Host>
        <h3>The wrapping parent container</h3>
        <slot />
      </Host>
    );
  }
}
