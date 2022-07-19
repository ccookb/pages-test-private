type TabProps = {
    title: string,
    children: JSX.Element[] | JSX.Element | string;
}

export const Tab = ({
    children
}: TabProps) => {
    return (
        <div>{children}</div>
    )
}