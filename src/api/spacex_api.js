const BASE_URL = "https://api.spacexdata.com/v4";

// [GET] the latest launch data mission
export async function fetchLatestLaunchData() {
    const url = `${BASE_URL}/launches/latest`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// [GET] launch pads that launches are used for
export async function fetchLaunchPadData() {
    const url = `${BASE_URL}/launchpads`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// [GET] rockets in the spacex fleet
export async function fetchRocketData() {
    const url = `${BASE_URL}/rockets`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// [GET] gets data of launch from launch Id
export async function fetchLaunchByIdData(launchId) {
    const url = `${BASE_URL}/launches/${launchId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// [GET] landing pads that boosters self land on, ie ocean barges
export async function fetchLandingPadData() {
    const url = `${BASE_URL}/landpads`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// [GET] booster cores of each booster launched
export async function fetchBoosterCoreData() {
    const url = `${BASE_URL}/cores`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// [GET] previous launch
export async function fetchPreviousLaunchData() {
    const url = `${BASE_URL}/launches/past`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// [GET] next upcoming launch
export async function fetchUpcomingLaunchData() {
    const url = `${BASE_URL}/launches/upcoming`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function fetchNextLaunchData() {
    const url = `${BASE_URL}/launches/next`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function fetchFalcon9RocketData() {
    const url = `${BASE_URL}/rockets/5e9d0d95eda69973a809d1ec`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function fetchFalconHeavyRocketData() {
    const url = `${BASE_URL}/rockets/5e9d0d95eda69974db09d1ed`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function fetchStarshipRocketData() {
    const url = `${BASE_URL}/rockets/5e9d0d96eda699382d09d1ee`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}