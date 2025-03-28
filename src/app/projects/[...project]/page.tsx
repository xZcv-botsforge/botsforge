"use client";

import BaseLayout from "@/components/layout";
import { ReactElement, useEffect, useState } from "react";
import { IFSNode } from "../../api/fsnode";
import { useParams } from "next/navigation";

export default function Project(): ReactElement {
    const { project } = useParams<{ project: string[] }>();
    const path = project.join("/");
    const [fsnode, setFSNode] = useState<IFSNode | null>(null);
    const [fsnodes, setFSNodes] = useState(new Array<IFSNode>());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function() {
            try {
                setLoading(true);

                const rootFSNode: IFSNode = await (await fetch(`/api/fsnode?path=${path}&findMany=false`)).json();
                const rootFSNodeChildren: IFSNode[] = await (await fetch(`/api/fsnode?parentId=${rootFSNode.id}`)).json();

                setFSNode(rootFSNode);
                setFSNodes(rootFSNodeChildren);
            } finally {
                setLoading(false);
            }
        })();
    }, [path]);

    return (
        <BaseLayout>
            {!loading ?
                (<>
                    {fsnode!.type == "folder" ?
                        fsnodes.map((node: IFSNode) => (
                            <div key={node.id}>
                                <div>name: {node.name}</div>
                                <div>type: {node.type}</div>
                                <div>path: {node.path}</div>
                                <div>parentId: {node.parentId}</div>
                            </div>
                        )) :
                    "File can't contain any child node!" + " path: " + fsnode!.path
                    }
                </>) :
            "Loading..."}
        </BaseLayout>
    )
}