import { companyData } from "../../assets/Data/Company"



export const AboutCompany = () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const company: { [key: string]: any } = companyData

    return (
        <div className="flex flex-col gap-1">
            {
                Object.keys(company).map((key, index) => key != 'Name' &&
                    <div className="my-4" key={index}>
                        <div className="text-xl font-semibold mb-2">{key}</div>
                        {
                            key != 'Website' ?
                                <div className="flex flex-wrap gap-2 text-sm text-mine-shaft-300">{company[key]}</div> : <a href={company[key]} className="text-sm text-bright-sun-400" target="_blank">{company[key]}</a>
                        }
                    </div>
                )
            }
        </div>
    )
}