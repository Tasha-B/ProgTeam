interface Props {
    params: {
        id: string

        // id: string[]
        // при этом папка [...id]
        // <h2>Items: block with id { JSON.stringify(params) }</h2>
        // тогда мы можем выводить несколько block/42/55/4452 ect
    }
}

// export async function generateStaticParams() {
//     const blocks = await fetch('https://.../blocks').then((res) => res.json())

//     return blocks.map((block: any) => ({
//       slug: block.slug,
//     }))
//   }

export default function BlockItems({ params }: Props) {
    return (
<div>
    <h2>Items: block with id { params.id }</h2>
</div>
  )
}
