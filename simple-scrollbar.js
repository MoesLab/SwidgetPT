var config = {
        container: "#OrganiseChart1",
        rootOrientation:  'NORTH', // NORTH || EAST || WEST || SOUTH
        scrollbar: "fancy",
        // levelSeparation: 30,
        siblingSeparation:   20,
        subTeeSeparation:    60,
        
        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    // Base
    ceo = {
        text: {
            name: "Swidget",
            title: "C4 driver Base Model",
            stage: "Stage: A",
            progress: "Progress(%): 50",
        },
        image: "hosts/inserts100x100.jpg",
        HTMLid: "ceo"
    },
    // Host outlet
    cto = {
        parent: ceo,
        stackChildren: true,
        text:{
            name: "HOST: Outlet",
            title: "Outlet 15A / 20A",
            stage: "Stage: A",
            progress: "Average Progress(%): 40",
        },
        image: "hosts/outlet100x100.jpg",   
        HTMLid: "cto"
    },
    // Host Switch
    cbo = {
        parent: ceo,
        stackChildren: true,
        text:{
            name: "HOST: Switch",
            title: "One way Switch",
            stage: "Stage: A",
            progress: "Average Progress(%): 35",
        },
        image: "hosts/switch100x100.jpg",
        HTMLid: "cbo"
    },
    //Host Dimmer
    cdo = {
        parent: ceo,
        stackChildren: true,
        text:{
            name: "HOST: Dimmer",
            title: "one/two way Dimmer",
            stage: "Stage: A",
            progress: "Average Progress(%): 20",

        },
        image: "hosts/dimmer100x100.jpg",
        HTMLid: "cdo"
    },
    ////////////////////////////////////Outlet children
    cto2 = {
        parent: cto,
        text:{
            name: "INSERT: Control",
            title: "Control host future",
            stage: "Stage: A",
            progress: "Progress(%): 40",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cto2"
    },
    cto3 = {
        parent: cto,
        text:{
            name: "INSERT: USB",
            title: "Control host and power",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cto3"
    },
    cto4 = {
        parent: cto,
        text:{
            name: "INSERT: LED Guidelight",
            title: "Control host future",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cto4"
    },
    cto5 = {
        parent: cto,
        text:{
            name: "INSERT: Powerout Light",
            title: "Control host future only",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cto5"
    },
    cto6 = {
        parent: cto,
        text:{
            name: "INSERT: Temp/Humi",
            title: "Control host/insert future",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cto6"
    },
    cto7 = {
        parent: cto,
        text:{
            name: "INSERT: Temp/Humi/ Motion",
            title: "Control host/insert future",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cto7"
    },    
    cto8 = {
        parent: cto,
        text:{
            name: "INSERT: Motion",
            title: "Control host/insert future",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cto8"
    },
    cto9 = {
        parent: cto,
        text:{
            name: "INSERT: AirQuality/ T/H/Pressure",
            title: "Control host/insert future",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cto9"
    },

    ////////////////////////////////////Switch children
    cbo2 = {
        parent: cbo,
        text:{
            name: "INSERT: Control",
            title: "Control host future",
            stage: "Stage: A",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cbo2"
    },
    cbo3 = {
        parent: cbo,
        text:{
            name: "INSERT: USB",
            title: "Control host and power",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cbo3"
    },
    cbo4 = {
        parent: cbo,
        text:{
            name: "INSERT: LED Guidelight",
            title: "Control host future",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cbo4"
    },
    cbo5 = {
        parent: cbo,
        text:{
            name: "INSERT: Powerout Light",
            title: "Control host future only",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cbo5"
    },
    cbo6 = {
        parent: cbo,
        text:{
            name: "INSERT: Temp/Humi",
            title: "Control host/insert future",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cbo6"
    },
    cbo7 = {
        parent: cbo,
        text:{
            name: "INSERT: Temp/Humi/ Motion",
            title: "Control host/insert future",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cbo7"
    },    
    cbo8 = {
        parent: cbo,
        text:{
            name: "INSERT: Motion",
            title: "Control host/insert future",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cbo8"
    },
    cbo9 = {
        parent: cbo,
        text:{
            name: "INSERT: AirQuality/ T/H/Pressure",
            title: "Control host/insert future",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cbo9"
    },
    ////////////////////////////////////Dimmer children
    cdo2 = {
        parent: cdo,
        text:{
            name: "INSERT: Control",
            title: "Control host future",
            stage: "Stage: A",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cdo2"
    },
    cdo3 = {
        parent: cdo,
        text:{
            name: "INSERT: USB",
            title: "Control host and power",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cdo3"
    },
    cdo4 = {
        parent: cdo,
        text:{
            name: "INSERT: LED Guidelight",
            title: "Control host future",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cdo4"
    },
    cdo5 = {
        parent: cdo,
        text:{
            name: "INSERT: Powerout Light",
            title: "Control host future only",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cdo5"
    },
    cdo6 = {
        parent: cdo,
        text:{
            name: "INSERT: Temp/Humi",
            title: "Control host/insert future",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cdo6"
    },
    cdo7 = {
        parent: cdo,
        text:{
            name: "INSERT: Temp/Humi/ Motion",
            title: "Control host/insert future",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cdo7"
    },    
    cdo8 = {
        parent: cdo,
        text:{
            name: "INSERT: Motion",
            title: "Control host/insert future",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cdo8"
    },
    cdo9 = {
        parent: cdo,
        text:{
            name: "INSERT: AirQuality/ T/H/Pressure",
            title: "Control host/insert future",
            stage: "Stage: B",
            progress: "Progress(%): 10",
        },
        image: "hosts/control100x100.jpg",
        HTMLid: "cdo9"
    }

    ALTERNATIVE = [
        config,
        ceo,
        cto,
        cbo,
        cdo,
        cto2,
        cto3,
        cto4,
        cto5,
        cto6,
        cto7,
        cto8,
        cto9,
        cbo2,
        cbo3,
        cbo4,
        cbo5,
        cbo6,
        cbo7,
        cbo8,
        cbo9,
        cdo2,
        cdo3,
        cdo4,
        cdo5,
        cdo6,
        cdo7,
        cdo8,
        cdo9

    ];