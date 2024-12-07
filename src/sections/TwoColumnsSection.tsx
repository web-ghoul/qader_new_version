export const TwoColumnsSection = ({
  title,
  content,
  borderTop,
  borderBottom,
}: {
  title: string
  content: string
  borderTop?: boolean
  borderBottom?: boolean
}) => {
  return (
    <section className="two--column container">
      <div
        className={
          `${borderTop ? 'mb-20 ' : ''}` + `${borderBottom ? 'mt-20 ' : ''}`
        }
      >
        {borderTop ? (
          <div className="line bg-gray200 h-0.5 w-full" data-animation="line" />
        ) : null}

        <div className="page-grid gap-y-7.5 section--small--padding">
          <div className="space-y-2.5 w-fit col-span-full lg:col-span-4">
            <h2 className="capitalize" data-animation="text-reveal">
              {title}
            </h2>
            <div
              className="line h-1 w-[55%] rounded-full bg-blue600"
              data-animation="line"
            ></div>
          </div>

          <p
            className="base regular col-span-full lg:col-span-8"
            data-animation="text-reveal"
          >
            {content}
          </p>
        </div>

        {borderBottom ? (
          <div className="line bg-gray200 h-0.5 w-full" data-animation="line" />
        ) : null}
      </div>
    </section>
  )
}
