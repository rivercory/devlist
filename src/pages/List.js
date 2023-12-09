import data from "../data/list.json";
import { useState } from "react";

const List = () => {
    const [filter, setFilter] = useState();
    const projects = data;

    console.log(projects);

    const filteredProjects = !filter
        ? projects
        : projects.filter(project => project[filter]);

    return (
        <div className="w-full">
            <div className="ml-4 mt-4 md:mt-0 mr-4 p-8 rounded-lg bg-primary text-white suit">
                <p className="text-3xl">목록</p>
                <p>개발에 도움을 주는 웹사이트들입니다.</p>
            </div>

            <div role="tablist" className="grid gap-2 w-fit ml-4 mt-4 pretendard">
                <a role="tab" className="tab border-2 rounded-full" onClick={() => setFilter()}>
                    전체
                </a>
                <a role="tab" className="tab border-2 rounded-full" onClick={() => setFilter("ui/design")}>
                    UI/디자인
                </a>
                <a role="tab" className="tab border-2 rounded-full" onClick={() => setFilter("frontend")}>
                    Frontend
                </a>
                <a role="tab" className="tab border-2 rounded-full" onClick={() => setFilter("etc")}>
                    기타
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 p-4 gap-4 w-fit">
                {filteredProjects.map(project => {
                    return (
                        <a href={project.link} target="_blank">
                            <div className="card bg-base-100 card-bordered border-2">
                                <figure><img className="p-6" src={project.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {project.name}
                                    </h2>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default List;