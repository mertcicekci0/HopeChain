import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Embeddable House",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
    
      
        {
            crowdfund:
                "andr1lad8vny6rkvfz04e6kvg4az4tlm0hpz9r4lnkfjced23plk8g5rsmzkzg7",
            cw721: "andr1htm45602wxs85npwesq5pyu4zn57c0m5j3lcq64dqs7tcdes9h5szjdzws",
            name: "HopeCollection",
            type: ICollectionType.CROWDFUND,
            id: "embeddables-crowdfund-1",
        },
    
    ],
};

export default CONFIG;
