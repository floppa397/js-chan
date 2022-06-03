import React from "react";

type AvailableIcons = "account_circle" | "chat_bubble" | "explore" | "add"

export default function Icon(props: { variant: AvailableIcons }): JSX.Element {
    return (<i className="material-icons">{props.variant}</i>);
}
