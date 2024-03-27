export default function AboutDynamicPage({ params}: {params: {slug: string}}) {
    return <>
        {JSON.stringify(params)}
    </>
}