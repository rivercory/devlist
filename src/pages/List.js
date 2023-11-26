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
            <div className="ml-4 mr-4 p-8 rounded-lg bg-primary text-white suit">
                <p className="text-3xl">목록</p>
                <p>개발에 도움을 주는 웹사이트들입니다.</p>
            </div>

            <div role="tablist" className="mt-4 w-fit tabs tabs-boxed tabs-lg ml-4 pretendard">
                <a role="tab" className="tab" onClick={() => setFilter()}>
                    전체
                </a>
                <a role="tab" className="tab" onClick={() => setFilter("ui/design")}>
                    UI/디자인
                </a>
                <a role="tab" className="tab" onClick={() => setFilter("frontend")}>
                    Frontend
                </a>
                <a role="tab" className="tab" onClick={() => setFilter("etc")}>
                    기타
                </a>
            </div>

            <div className="grid grid-cols-4 p-4 gap-4 w-full">
                {filteredProjects.map(project => {
                    return (
                        <a href={project.link} target="_blank">
                            <div className="card bg-base-100 card-bordered border-2">
                                <figure><img src={project.img} alt="Shoes" /></figure>
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