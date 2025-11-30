import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome({ }) {


    return (
        <>
            <Head title="Welcome" />
            <HeroGeometric />
        </>
    );
}
