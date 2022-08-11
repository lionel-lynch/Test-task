const useGet = () => {
    return async (url, options) => {
        try {
            let controller = new AbortController();
            setTimeout(() => controller.abort(), 10000);

            const resp = await fetch(url, {
                ...options,
                signal: controller.signal
            });

            const json = await resp.json();

            return json;
        } catch(err) {
            console.log(err);
            return [];
        }
    };
};

const usePost = () => {
    return async (url, options) => {
        try {
            let controller = new AbortController();
            setTimeout(() => controller.abort(), 10000);

            const resp = await fetch(url, {
                type: 'POST',
                ...options,
                signal: controller.signal
            });

            const text = await resp.text();

            return text;
        } catch(err) {
            console.log(err);
            return [];
        }
    };
};

export { useGet, usePost };