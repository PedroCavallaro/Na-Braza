export type AuthTypeObj = {
    login: AuthConst;
    register: AuthConst;
};

export type AuthConst = {
    title: string;
    buttonText: string;
};

export type Product = {
    name: string;
};
export type SlideType = {
    activeIndex: number;
};
export type Products = {
    name: string;
    unit_value: number;
    size: string;
    price: number;
    image: string;
    setup_time: string;
    description: string;
    evaluation: number;
};
